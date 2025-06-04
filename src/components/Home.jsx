import React from "react";
function Home({color, name, city}) {
  return (
    <div id="home">
		<h1 style={{color: color}}>
            {name} is a web Developer from {city}
        </h1>
    </div>
  );
}
export default Home;