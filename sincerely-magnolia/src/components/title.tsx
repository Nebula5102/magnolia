interface TitleString {
	title: string;
}

export default function Title(props: TitleString) {
  return (
  <div className="flex items-center">
	<h1>{props.title}</h1>
  </div>
  );
}
