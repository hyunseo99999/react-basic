## JSON-SERVER
- json-server --watch db.json --port 3001

## prop-types
- npm i prop-types


    Card.propTypes = {
        title: PropTypes.string.isRequired,
        children: PropTypes.element,
    }

    Card.defaultProps = {
        children: null
    }

## history.push 페이지 이동
    import { useHistory } from "react-router-dom";
    const history = useHistory();
    history.push('/blogs/edit')

## useEffect
##### 1. 의존성 배열이라고 한다.
##### 2. []에 값을 안넣으면 계속 실행, [] 경우 실행 1번만 호출되게 됨.
##### 3. [id] 이렇게 주면 id값이 변경 되면 실행된다.

    useEffect(() => {
        getPost(id);
    }, [])
