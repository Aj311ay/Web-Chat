import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps= useMultiChatLogic('2020071f-69b0-4985-ba5b-570f7ab9ef0f',props.username,props.user.secret);
    return (
         <div style={{height:'100vh'}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style={{height:'100%'}}/>
    </div>
    )
}
export default ChatsPage