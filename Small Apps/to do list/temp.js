{/* <script>
        const KEY = "to_do_list"
        const newInput = document.getElementById('newTask');
        const listEl = document.getElementById('tasklist');
        const addBtn = document.getElementById('addBtn');
        const pendingCount = document.getElementById('pandingCount');
        const emptyEl = document.getElementById('empty');
        const searchEl = document.getElementById('search');
        const clearCompletedBtn = document.getElementById('clearCompletedBtn');
        const filtersBtns = document.querySelectorAll('[data-filter]')
        

        let tasks = JSON.parse(localStorage.getItem(KEY)) || [];
        let filter = 'all';
        let query = '';

        function save() {
            localStorage.setItem(KEY, JSON.stringify(tasks));
        }

        function render() {
            const filtered = tasks.filter(task => {
                if (filter === 'active') return !task.done;
                if (filter === 'done') return task.done;
                if (query.trim()) return task.text.toLowerCase().includes(query.toLowerCase());
                return true;
            });

            listEl.innerHTML = '';
            emptyEl.style.display = filtered.length === 0 ? 'block' : 'none';

            filtered.forEach(task => {
                const li = document.createElement('li');
                li.className = 'item';

                const checkbox = document.createElement('div');
                checkbox.className = 'checkbox';
                checkbox.innerHTML = task.done ? '✓' : '';
                checkbox.onclick = () => { task.done = !task.done; save(); render(); };

                const text = document.createElement('div');
                text.className = 'text' + (task.done ? ' done' : '');
                text.textContent = task.text;
                text.ondblclick = () => editTask(task.id);

                const btns = document.createElement('div');
                btns.className = 'btns';

                const editBtn = document.createElement('button');
                editBtn.className = 'small edit';
                editBtn.textContent = 'Edit';
                editBtn.onclick = () => editTask(task.id);

                const removeBtn = document.createElement('button');
                removeBtn.className = 'small remove';
                removeBtn.textContent = 'Delete';
                removeBtn.onclick = () => {
                    if (confirm('Delete this task?')) {
                        tasks = tasks.filter(t => t.id !== task.id);
                        save();
                        render();
                    }
                };

                btns.appendChild(editBtn);
                btns.appendChild(removeBtn);
                li.appendChild(checkbox);
                li.appendChild(text);
                li.appendChild(btns);
                listEl.appendChild(li);
            });

            document.getElementById('pendingCount').textContent = tasks.filter(t => !t.done).length;
        }

        function addNewTask() {
            const text = newInput.value.trim();
            if (!text) return;
            
            const task = {
                id: Date.now(),
                text: text,
                done: false
            };
            
            tasks.unshift(task);
            newInput.value = '';
            save();
            render();
        }

        function editTask(id) {
            const task = tasks.find(t => t.id === id);
            if (!task) return;
            
            const newText = prompt('Edit task', task.text);
            if (newText !== null && newText.trim()) {
                task.text = newText.trim();
                save();
                render();
            }
        }

        newInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') addNewTask();
        });

        document.querySelector('.search-input').addEventListener('input', (e) => {
            query = e.target.value;
            render();
        });

        clearCompletedBtn.addEventListener('click', () => {
            const completed = tasks.filter(t => t.done);
            if (completed.length === 0) {
                alert('No completed tasks');
                return;
            }
            if (confirm('Remove all completed tasks?')) {
                tasks = tasks.filter(t => !t.done);
                save();
                render();
            }
        });

        filtersBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filtersBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                filter = btn.getAttribute('data-filter');
                render();
            });
        });

        render();
    </script> */}