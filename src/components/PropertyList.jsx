import RecommendationCard from "./RecommendationCard";


export default function PropertyList() {
const data = [

];


return (
<div className="card-container">
{data.map((item, index) => (
<RecommendationCard key={index} item={item} />
))}
</div>
);
}