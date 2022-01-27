export default function Welcome() {
    return (
        <div className={`h-full flex flex-col space-y-4 items-center justify-center`}>
            <h1 className={`text-4xl text-center flex items-center space-x-2`}>
                <p>NextJS</p>
                <p className={`text-blue-500`}>TailwindCSS</p>
                <p className={`text-purple-500`}>Preact</p>
                <p className={`text-blue-700`}>Typescript</p>
            </h1>
            <p>Boilerplate by JSM eCommerce B.V.</p>
        </div>
    )
}