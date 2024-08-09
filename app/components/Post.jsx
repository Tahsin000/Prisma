import DeletePostButton from "./DeletePostButton";


export default function Post({id, title, content, authorName}) {
    return (
        <div style={{border: '1px solid white', padding: '10px', margin: '10px 0px'}}>
             <h3>{authorName}</h3>
             <h5>{title}</h5>
             <p>{content}</p>
             <DeletePostButton postId={id}/>
        </div>
    )
};