const user = {
    name: 'Hypodermic Sally',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaV9ORQcfLZMvFGiAnhCVQxTlxjazBgBwFdw&s',
    imageSize: 200,

}
export default function AboutUs() {
    return <div>
        <h1>{user.name}</h1>
        <img className="avatar" src={user.imageUrl}
            style={{
                width: user.imageSize,
                height: user.imageSize
            }} />
    </div>
}