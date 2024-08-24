from flask import Flask, jsonify # type: ignore

app = Flask(__name__)

@app.route('/services')
def services():
    services = [
        {"name": "Consulta médica", "description": "Consultas com especialistas de diversas áreas."},
        {"name": "Entrega de medicamentos", "description": "Receba seus medicamentos em casa."},
        {"name": "Teleatendimento", "description": "Atendimento médico via chamada de vídeo."}
    ]
    return jsonify(services)

if __name__ == '__main__':
    app.run(debug=True)

