export const sendMessage = async (data : any) => {

  const res = await fetch("/api/contact", {
    method: "POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify(data)
  });

  const result = await res.json();

  if(result.success){
    alert("Message sent");
  }else{
    alert(result.message);
  }

};