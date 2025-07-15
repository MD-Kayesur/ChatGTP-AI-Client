import React from "react";

const GenarateImg = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("object");
    const prompt = e.target.prompt.value;
    console.log(prompt);
    const form = new FormData();
    form.append("prompt", prompt);

    fetch("https://clipdrop-api.co/text-to-image/v1", {
      method: "POST",
      headers: {
        "x-api-key": "YOUR_API_KEY from env file",
      },
      body: form,
    })
      .then((response) => response.arrayBuffer())
      .then((buffer) => {
        // buffer here is a binary representation of the returned image
        console.log(buffer);
        const blob = new Blob([buffer], { type: "image/png" }); // Change MIME type as needed
        const url = URL.createObjectURL(blob);

        const img = document.createElement("img");
        img.src = url;
        document.body.appendChild(img);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="   flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-7">Genarate Img</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form action="" onSubmit={handleSubmit}>
              <fieldset className="fieldset flex   items-center">
                <input
                  name="prompt"
                  type="text"
                  className="input "
                  placeholder="Email"
                />

                <button className="btn btn-neutral ">Genarate</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenarateImg;
