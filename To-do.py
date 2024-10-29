from flask import Flask, request, jsonify

app = Flask(__name__)

tasks = []

@app.route('/tasks', methods=['GET', 'POST'])
def manage_tasks():
    if request.method == 'POST':
        task = request.json
        tasks.append(task)
        return jsonify(task), 201
    return jsonify(tasks)

@app.route('/tasks/<int:task_id>', methods=['PUT', 'DELETE'])
def update_task(task_id):
    if request.method == 'PUT':
        task = request.json
        tasks[task_id] = task
        return jsonify(task)
    elif request.method == 'DELETE':
        tasks.pop(task_id)
        return '', 204

if __name__ == '__main__':
    app.run(debug=True)
