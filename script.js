fetch('data.json')
    .then(response => response.json())
        .then(data=>{
            document.getElementById("task-title").innerText = data.tasks[0].task_title;
            document.getElementById("task3").innerText = data.tasks[0].assets[0].display_asset_reflection;

            for (let i = 0; i < data.tasks[0].assets.length; i++) {
                let headId = "assetHeading"+(i+1);
                let descId = "desc"+(i+1);
                // console.log(idd);
                document.getElementById(headId).innerText = data.tasks[0].assets[i].asset_title;
                document.getElementById(descId).innerText = data.tasks[0].assets[i].asset_description;
            }
        })