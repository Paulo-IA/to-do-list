import { getCurrentDate } from '../../helpers/dateManipulation';
import * as C from './styles'

export const Header = () => {
    const date = getCurrentDate()
    return (
        <C.Container>
            <C.Date>{date}</C.Date>
        </C.Container>

    );
}