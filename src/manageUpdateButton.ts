
document.querySelectorAll(".updateSchoolButton").forEach(button => {
    button.addEventListener("click", async (event: Event) => {
        event.preventDefault();
        const target: HTMLButtonElement = event.target as HTMLButtonElement;
        const buttonId: string = `${target.id}`;
        const inputTargetSchool: HTMLInputElement = document.querySelector(`#school-${target.value}`) as HTMLInputElement;
        const newSchoolName: string = inputTargetSchool.value;
        const body = {
            "id": `${target.value}`,
            "name": `${newSchoolName}`
        };
        const resultPatch = await fetch(`${process.env.DOMAIN}/api/v1/schools`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(body),
        });
        const resultPatchJson = await resultPatch.json();
        window.alert(resultPatchJson.message);
        location.replace(`${process.env.DOMAIN}/api/v1/schools`);
    });
});
