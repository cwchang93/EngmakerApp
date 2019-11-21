import React from 'react';
import Calendar from './components/Module'; // functionSample為範例，請改成您的模組名稱
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
//import { CategoryName } from '../index';
// import EnrollList from '@components/EnrollList';
import dayjs from 'dayjs';

storiesOf('Calendar', module)
    .addDecorator(withKnobs)
    .add('Calendar', () => {
        const props: any = {
            initYearMonth: text('initYearMonth', dayjs().format('YYYY-MM-DD')),
        };
        // const [closeSheet, setCloseSheet] = useState(true);

        const hdCallBack = (date: any) => {
            console.log('dt', date);
        };

        return (
            <React.Fragment>
                {/* B項目 */}
                <Calendar {...props} dateCallBack={(date: any) => hdCallBack(date)} />
                {/* {closeSheet ? null : (
                    <EnrollList
                        date={}
                        onClose={() => {
                            setCloseSheet(true);
                        }}
                        host={'CowBoy'}
                        // getSubmitData
                    /> */}
            </React.Fragment>
        );
    });
