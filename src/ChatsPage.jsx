import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {

    const chatProps = useMultiChatLogic(
        '6d1cda65-27d9-4ce7-b5ac-dc0088ef747b', 
        props.user.username, 
        props.user.secret
        );

    return (
        <div style={{ height: '100vh' }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
        </div>
    )
}

export default ChatsPage;
