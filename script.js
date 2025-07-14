// Datos de la malla curricular (Ingeniería en Marketing Digital - Duoc UC)
const courses = [
    // --- 1er Semestre ---
    { id: 1, name: "Nivelación Matemática", semester: 1, credits: 4, category: "Básicas y de Empleabilidad" },
    { id: 2, name: "Fundamentos de Economía", semester: 1, credits: 4, category: "Básicas y de Empleabilidad" },
    { id: 3, name: "Habilidades Comunicacionales para el Trabajo", semester: 1, credits: 4, category: "Formación Valórica" },
    { id: 4, name: "Introducción al Marketing", semester: 1, credits: 6, category: "Especialidad" },
    { id: 5, name: "Fundamentos de Ventas", semester: 1, credits: 4, category: "Especialidad" },

    // --- 2do Semestre ---
    { id: 6, name: "Álgebra", semester: 2, credits: 4, category: "Básicas y de Empleabilidad" },
    { id: 7, name: "Ética para el Trabajo", semester: 2, credits: 4, category: "Formación Valórica" },
    { id: 8, name: "Plan de Marketing", semester: 2, credits: 6, category: "Especialidad" },
    { id: 9, name: "Medios & Audiencias", semester: 2, credits: 6, category: "Especialidad" },
    { id: 10, name: "Herramientas Tecnológicas I", semester: 2, credits: 4, category: "Especialidad" },

    // --- 3er Semestre ---
    { id: 11, name: "Estadística Descriptiva", semester: 3, credits: 4, category: "Básicas y de Empleabilidad" },
    { id: 12, name: "Fundamentos de Gestión de Personas", semester: 3, credits: 4, category: "Básicas y de Empleabilidad" },
    { id: 13, name: "Branding", semester: 3, credits: 6, category: "Especialidad" },
    { id: 14, name: "Investigación de Mercados", semester: 3, credits: 6, category: "Especialidad" },
    { id: 15, name: "Herramientas de Marketing Digital", semester: 3, credits: 4, category: "Especialidad" },

    // --- 4to Semestre ---
    { id: 16, name: "Fundamentos de Finanzas y Presupuestos", semester: 4, credits: 4, category: "Básicas y de Empleabilidad" },
    { id: 17, name: "Formación Cristiana", semester: 4, credits: 4, category: "Formación Valórica" },
    { id: 18, name: "Diseño UX/UI", semester: 4, credits: 6, category: "Especialidad" },
    { id: 19, name: "Sitios Web y Landing Pages", semester: 4, credits: 6, category: "Especialidad" },
    { id: 20, name: "Herramientas Tecnológicas II", semester: 4, credits: 4, category: "Especialidad" },

    // --- 5to Semestre ---
    { id: 21, name: "Cadena de Suministros", semester: 5, credits: 4, category: "Básicas y de Empleabilidad" },
    { id: 22, name: "Ética Profesional", semester: 5, credits: 4, category: "Formación Valórica" },
    { id: 23, name: "Inbound Marketing I", semester: 5, credits: 6, category: "Especialidad" },
    { id: 24, name: "Social Media Marketing", semester: 5, credits: 6, category: "Especialidad" },
    { id: 25, name: "Herramientas Tecnológicas III", semester: 5, credits: 4, category: "Especialidad" },

    // --- 6to Semestre ---
    { id: 26, name: "Análisis y Gestión de Datos", semester: 6, credits: 4, category: "Básicas y de Empleabilidad" },
    { id: 27, name: "Electivo Competencias Globales", semester: 6, credits: 4, category: "Formación Complementaria" },
    { id: 28, name: "Inbound Marketing II", semester: 6, credits: 6, category: "Especialidad" },
    { id: 29, name: "Propuesta de Valor y Precios", semester: 6, credits: 6, category: "Especialidad" },
    { id: 30, name: "Taller Aplicado I de Marketing", semester: 6, credits: 4, category: "Talleres Aplicados" },

    // --- 7mo Semestre ---
    { id: 31, name: "Big Data e Inteligencia de Negocios", semester: 7, credits: 4, category: "Básicas y de Empleabilidad" },
    { id: 32, name: "Electivo Competencias Globales", semester: 7, credits: 4, category: "Formación Complementaria" },
    { id: 33, name: "Inbound Marketing III", semester: 7, credits: 6, category: "Especialidad" },
    { id: 34, name: "Canales de Distribución & E-Commerce", semester: 7, credits: 6, category: "Especialidad" },
    { id: 35, name: "Taller Aplicado II de Marketing", semester: 7, credits: 4, category: "Talleres Aplicados" },

    // --- 8vo Semestre ---
    { id: 36, name: "Taller Aplicado Final", semester: 8, credits: 12, category: "Talleres Aplicados" },
];

// Función para renderizar la malla
function renderGrid() {
    const grid = document.getElementById('grid');
    grid.innerHTML = '';

    courses.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.className = 'course';
        courseElement.classList.add(course.category.replace(/\s+/g, '-').toLowerCase());
        courseElement.innerHTML = `
            <h3>${course.name}</h3>
            <p><strong>Semestre:</strong> ${course.semester}</p>
            <p><strong>Créditos:</strong> ${course.credits}</p>
            <p><strong>Categoría:</strong> ${course.category}</p>
        `;
        grid.appendChild(courseElement);
    });
}

// Buscador de asignaturas
document.getElementById('search').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const courses = document.querySelectorAll('.course');

    courses.forEach(course => {
        const name = course.querySelector('h3').textContent.toLowerCase();
        if (name.includes(searchTerm)) {
            course.classList.remove('hidden');
        } else {
            course.classList.add('hidden');
        }
    });
});

// Filtro por semestre
document.getElementById('semester-filter').addEventListener('change', (e) => {
    const semester = e.target.value;
    const courses = document.querySelectorAll('.course');

    courses.forEach(course => {
        const courseSemester = course.querySelector('p:nth-of-type(1)').textContent.split(' ')[1];
        if (semester === 'all' || courseSemester === semester) {
            course.classList.remove('hidden');
        } else {
            course.classList.add('hidden');
        }
    });
});

// Filtro por categoría
document.getElementById('category-filter').addEventListener('change', (e) => {
    const category = e.target.value;
    const courses = document.querySelectorAll('.course');

    courses.forEach(course => {
        const courseCategory = course.querySelector('p:nth-of-type(2)').textContent.split(': ')[1];
        if (category === 'all' || courseCategory === category) {
            course.classList.remove('hidden');
        } else {
            course.classList.add('hidden');
        }
    });
});

// Botón para mostrar/ocultar todos
document.getElementById('toggle-all').addEventListener('click', () => {
    const courses = document.querySelectorAll('.course');
    const allHidden = Array.from(courses).every(c => c.classList.contains('hidden'));

    courses.forEach(course => {
        if (allHidden) {
            course.classList.remove('hidden');
        } else {
            course.classList.add('hidden');
        }
    });
});

// Inicializar la malla
renderGrid();
