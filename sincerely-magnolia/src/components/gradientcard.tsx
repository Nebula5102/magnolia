interface GradientProps {
	side: string;
	text: string;
}

export default function GradientCard(props: GradientProps) {
  const { side, text } = props;
  return (
  <div className=
		{`${side === "right" ? "grid w-full grid-cols-2 bg-gradient-to-r from-red-500 to-blue-500":
		"grid w-full grid-cols-2 bg-gradient-to-l from-red-500 to-blue-500"}`}
  >
  	<div
		className={`${side === "right" ? "flex":"flex hidden"}`}
	>
	</div>
	<div
		className="flex text-justify"
	>
		<p>{`${text}`}</p>
	</div>
	<div
		className={`${side === "left" ? "flex":"flex hidden"}`}
	></div>
  </div>
  );
}
