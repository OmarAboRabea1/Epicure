import { Container, Empty_Box, Empty_text } from "../styles";


const EmptyMessage= ({ counters }: { counters: number[] }) => {

    return(
        <Container>
            <Empty_Box>
                {
                    counters[0] == 0 &&
                    <Empty_text>Breakfast dishes out of stock!</Empty_text>
                }
            </Empty_Box>
            <Empty_Box>
                {
                    counters[1] == 0 &&
                    <Empty_text>launch dishes out of stock!</Empty_text>
                }
            </Empty_Box>
            <Empty_Box>
                {
                    counters[2] == 0 &&
                    <Empty_text>dinner dishes out of stock!</Empty_text>
                }
            </Empty_Box>
            <Empty_Box>
                {
                    counters[3] == 0 &&
                    <Empty_text>dessert dishes out of stock!</Empty_text>
                }
            </Empty_Box>

        </Container>
    )
    
}
export default EmptyMessage;


