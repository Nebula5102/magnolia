import Title from "../components/title.tsx"
import PageCard from "../components/pagecard.tsx"
import GradientCard from "../components/gradientcard.tsx"

export default function Home() {
  return (
  <div className="flex items-center flex-col">
	<Title title="Sincerely Magnolia" />
	<div className="grid grid-cols-3 gap-0 w-full h-96">
		<PageCard title="Our Story" color="red"/>
		<PageCard title="Featured Pieces" color="blue"/>
		<PageCard title="Location" color="purple"/>	
	</div>
	<Title title="Our Story" />
	<GradientCard side="right" text="This is the gradient going to the right"/>
	<GradientCard side="left" text="This is the gradient going to the left"/>
	<div className="grid grid-cols-3 gap-0 w-full h-96">
	</div>
  </div>
  );
}
