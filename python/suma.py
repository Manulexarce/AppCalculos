from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/sumar', methods=['POST'])
def sumar():
    datos = request.get_json()
    num1 = datos['num1']
    num2 = datos['num2']
    resultado = num1 + num2
    return jsonify({'resultado': resultado})

if __name__ == '__main__':
    app.run()
