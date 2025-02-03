import {Helmet} from "react-helmet";

const Head = ({title}) => {
    return (
        <>
            <Helmet>
                <title>{title} | StreamVibe</title>
            </Helmet>
        </>
    )
}

export default Head;