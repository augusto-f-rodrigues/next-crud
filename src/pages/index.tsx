import Card from "../components/Card";

export default function Home() {
  return(
    <div className={`
    flex h-screen
    justify-center items-center
    bg-gradient-to-br from-blue-500 to-purple-500
    `}>
      <Card title={"Homepage"}>
        <span className="text-2xl">Conteúdo</span>
      </Card>

    </div>
    ) 
}
