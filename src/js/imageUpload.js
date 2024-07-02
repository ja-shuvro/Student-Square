async function displaySelectedImage(
  event,
  imageId,
  link,
  name,
  db_value,
  newData
) {
  const input = event.target;
  const image = document.getElementById(imageId);
  const imageRef = document.getElementById(db_value);
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      image.src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);

    // Upload image to server
    const formData = new FormData();
    formData.append(name, input.files[0]);

    try {
      const response = await fetch(
        `http://localhost:4040/ss-admin/p1/api/public/${link}`,
        {
          // Replace 'upload_endpoint_url' with your actual endpoint URL
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      imageRef.value = data[newData].id;
      console.log(imageRef.value);
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  }
}
