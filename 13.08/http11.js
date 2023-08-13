const buttonClass = document.getElementById("buttonClick");
buttonClass.addEventListener('click', () => {
    getRandomUser()
})
async function getRandomUser() {
        try {
          const response = await fetch("https://randomuser.me/api");
          if (response.ok) {
            const data = await response.json();
            console.log(
              data.results[0].name.first +
                "  " +
                data.results[0].name.last +
                "  " +
                data.results[0].email +
                "  " +
                data.results[0].registered.age +
                "  " +
                data.results[0].picture.thumbnail
            );
          } else {
            throw new Error("error");
          }
        } catch (error) {
          console.error(error);
        }
      }


