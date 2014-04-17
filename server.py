from flask import Flask, send_file
import os
import json

from analyzer import analyzeSymbol

app = Flask(__name__)

# serve all resources from static directory
@app.route('/js/<path:path>')
def js_proxy(path):
    return send_file(os.path.join('public/js/', path))
@app.route('/partials/<path:path>')
def partials_proxy(path):
    return send_file(os.path.join('public/partials/', path))
@app.route('/css/<path:path>')
def css_proxy(path):
    return send_file(os.path.join('public/css/', path))

# API routes
@app.route('/api/analyze/<stockSymbol>')
def apiAnalyze(stockSymbol):
    return json.dumps(analyzeSymbol(stockSymbol))

# leave frontend routing up to Angular
@app.route('/', defaults={'p': ''})
@app.route('/<path:p>')
def angularApp(p = None):
    return send_file('public/index.html')

if __name__ == '__main__':
    app.run(debug=True)
