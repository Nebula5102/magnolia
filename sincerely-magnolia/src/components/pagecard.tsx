function PageScrollButton(props) {
	return (
		<div className="flex rounded bg-indigo-500 place-content-center items-center w-36 h-20">
			{props.title}
		</div>	
	);
}

export default function PageCard(props) {
  return (
  <div 
  	className="flex place-content-center items-center bg-black w-full"
  	style={{ backgroundColor: props.color || "black" }}
  >
	<PageScrollButton title={props.title}/>	
  </div>
  );
}
