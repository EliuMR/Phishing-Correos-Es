import joblib
import numpy as np
import os
class deteccionPhishingRF:
    def __init__(self,correo):
        self.correo = correo
        # Ruta absoluta al directorio donde está ESTE archivo
        base_dir = os.path.dirname(os.path.abspath(__file__))

        modelo_path = os.path.join(
            base_dir,
            "random_forest_spam_model.joblib"
        )


        self.modelo = joblib.load(modelo_path)
        self.clases_legitimas = ["enron_ham", "hard_ham"]
        self.clases_phishing = ["traditional_phishing", "spear_phishing"]

    def __Prediccion(self):
        pred      = self.modelo.predict([self.correo])[0]
        probs     = self.modelo.predict_proba([self.correo])[0]
        clases    = self.modelo.classes_
        prob_pred = probs[np.where(clases == pred)][0]
        vector = self.modelo.named_steps["tfidf"].transform([self.correo])
        feature_names = np.array(
            self.modelo.named_steps["tfidf"].get_feature_names_out()
        )

        top_idx = vector.toarray()[0].argsort()[-5:][::-1]
        palabras_influyentes = [feature_names[i] for i in top_idx]
        return (pred, prob_pred, palabras_influyentes)
    
    def ObtencionResultado(self):
        pred, prob_pred, palabras_influyentes = self.__Prediccion()
        if pred in self.clases_legitimas:
             resultado = True
             mensaje = f"""
                ✅ RESULTADO DEL ANÁLISIS

                Este correo **parece legítimo** con una probabcilidad de **{prob_pred:.1%}**.

                Motivos principales:
                - El lenguaje es consistente con correos laborales reales
                - No se detectan patrones comunes de fraude
                - Las palabras más relevantes fueron: {', '.join(palabras_influyentes)}

                Aun así, siempre es buena práctica verificar al remitente si el mensaje solicita acciones importantes.
                """
        else:
            resultado = False
            mensaje = f"""
            ⚠️ ALERTA DE SEGURIDAD

            Este correo ha sido identificado como **PHISHING** ({pred}) con una probabilidad de **{prob_pred:.1%}**.

            Motivos principales:
            - Contiene términos comúnmente usados en correos fraudulentos
            - El contenido coincide con patrones históricos de phishing
            - Palabras más influyentes en la detección: {', '.join(palabras_influyentes)}

            ⚠️ Recomendación:
            No hagas clic en enlaces, no descargues archivos y verifica la fuente antes de responder.
            """
        
        return resultado, prob_pred, palabras_influyentes