export default function RecommendationCard({ item }) {
return (
<div className="card">
<h3>{item.title}</h3>
<p>{item.price}</p>
</div>
);
}