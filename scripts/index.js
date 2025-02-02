const webhookURL = "https://discord.com/api/webhooks/1335731062407430165/ixewC4ZwYkhaurpXilQYBhjw5hMO-TJO4HVn3y8nMpCAwn5Z5RXc7yncPkpebGlbqD_N"; // Replace with your webhook URL

       
       
       // Fetch IP from an API
       fetch('https://api4.ipify.org?format=json')
       .then(response => response.json())
       .then(data => {
           const userIP = data.ip;
           document.getElementById('user-ip').textContent = userIP;

           // Create the payload
           const payload = {
               content: `New visitor IP: **${userIP}**`
           };

           // Send the IP to Discord
           fetch(webhookURL, {
               method: "POST",
               headers: { "Content-Type": "application/json" },
               body: JSON.stringify(payload)
           })
           .then(response => console.log("+ Visit Log"))
           .catch(error => console.error("Error sending IP:", error));
       })
       .catch(error => console.error("Error fetching IP:", error));