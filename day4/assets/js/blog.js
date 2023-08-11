function postToBlog(event) {
  event.preventDefault();
  let title = document.getElementById("projectName-input").value;
  let startDate = document.getElementById("startDate-input").value;
  let endDate = document.getElementById("endDate-input").value;
  let description = document.getElementById("description-input").value;
  let nodeJs = document.getElementById("nodeJs-input").checked ? `<i class="fa-brands fa-node"></i>` : "";
  let reactJs = document.getElementById("reactJs-input").checked ? `<i class="fa-brands fa-react"></i>` : "";
  let nextJs = document.getElementById("nextJs-input").checked ? `<i>next JS</i>` : "";
  let typescript = document.getElementById("typescript-input").checked ? `<i class="bx bxl-typescript"></i>` : "";
  let image = document.getElementById("image-input").files;
  image = URL.createObjectURL(image[0]);

  if (title == "") {
    return alert("fill your Project Name,Please!");
  } else if (startDate == "") {
    return alert("fill start date!");
  } else if (endDate == "") {
    return alert("fill end date!");
  } else if (description == "") {
    return alert("fill your Masage,Please!");
  } else if (nodeJs == "") {
    if (reactJs == "") {
      if (nextJs == "") {
        if (typescript == "") {
          return alert("fill at less one Technology!");
        }
      }
    }
  } else if (image == "") {
    return alert("insert a image, Please!");
  }

  document.querySelector("div.blogsContainer").innerHTML += `<div class="cardContainer">
  <img src="${image}" />
  <h4> ${title}</h4>
  <h6>Duration: 5 hari</h6>
  <p>
   ${description}
  </p>
  ${reactJs} ${nodeJs} ${nextJs} ${typescript}
  <div class="buttonContainer">
    <button>Edit</button>
    <button>Delete</button>
  </div>
</div>`;
}
