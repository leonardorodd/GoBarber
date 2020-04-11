import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
    max-width: 600px;
    margin: auto;
    display: flex;
    flex-direction: column;

    header {
        margin: 30px 0 30px;
        align-self: center;
        display: flex;
        align-items: center;
        
        strong {
            color: #fff;
            font-size: 24px;
            margin: 0 15px;
        }

        button {
            background: none;
            border: 0;
        }
    }

    ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 15px;
        margin-bottom: 30px;
    }
`;

export const Time = styled.li`
    padding: 20px;
    border-radius: 4px;
    background: #fff;
    opacity: ${props => props.past ? 0.3 : 1};

    strong {
        display: block;
        color: ${props => props.available ? '#999' : '#7159c1' } ;
        font-size: 20px;
        font-weight: normal;
    }

    span {
        display: block;
        margin-top: 3px;
        color: ${props => props.available ? '#999' : '#7159c1' } ;
    }
`;
