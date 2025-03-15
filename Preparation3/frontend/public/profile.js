
        function showText(icon) {
            const texts = document.querySelectorAll('.info-box');
            texts.forEach(text => text.style.display = 'none');
            document.getElementById(icon).style.display = 'block';
        }
        document.addEventListener('DOMContentLoaded', () => {
            const texts = document.querySelectorAll('.info-box');
            texts.forEach(text => text.style.display = 'none');
        });