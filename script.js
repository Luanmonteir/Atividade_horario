function updateTime() {
    const now = new Date();
    const options = {
        timeZone: 'America/Sao_paulo',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };
    const timeString = now.toLocaleTimeString('pt-BR', options);
    document.getElementById('clock').textContent = timeString;
}

setInterval(updateTime, 1000);

updateTime();
