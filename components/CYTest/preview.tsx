import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Module from './index';
import { withKnobs, text, boolean, object, number, select } from '@storybook/addon-knobs';

storiesOf('CYTest', module)
    .addDecorator(withKnobs)
    .add('CYTest', () => {
        const props = {};
        return (
            <div>
                <Module {...props} />
            </div>
        );
    });
