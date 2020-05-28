import 'babel-polyfill';
import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { themes as reactUIThemes } from '@splunk/react-ui/themes';
import enterpriseDark from '@splunk/themes/enterpriseDark';
import DashboardCore, { themes as dashboardCoreThemes } from '@splunk/dashboard-core/';
import CloudPreset, { themes as presetThemes } from '@splunk/dashboard-presets/CloudPreset';

import dashboardDefinition from './dashboard-definition.js';
import DataModal from './components/DataModal';

const theme = {
    ...reactUIThemes.enterprise, // light theme
    // ...reactUIThemes.enterpriseDark, // dark theme
    ...dashboardCoreThemes.scp,
    ...presetThemes.scp,
};

const StyledApp = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

class App extends Component {
    state = {
        modalTitle: `Context for location=west`,
        openModal: false,
    };

    handleDashboardEvent = ev => {
        const { type, targetId } = ev;
        // based on the visualization id we can show additional context
        // for the clicked location
        const [, vizId] = targetId.split('_');
        if (type === 'ellipse.click' || type === 'value.click') {
            ev.originalEvent.preventDefault();
            this.setState({
                modalTitle: `Context for location=${vizId}`,
                openModal: true,
            });
        }
    };

    handleRequestClose = () => {
        this.setState({
            openModal: false,
        });
    };

    render() {
        return (
            <ThemeProvider theme={theme}>
                <StyledApp>
                    <DataModal
                        open={this.state.openModal}
                        modalTitle={this.state.modalTitle}
                        handleRequestClose={this.handleRequestClose}
                    />
                    <DashboardCore
                        width="100%"
                        height="100%"
                        preset={CloudPreset}
                        definition={dashboardDefinition}
                        dashboardCorePlugin={{
                            onEventTrigger: this.handleDashboardEvent,
                        }}
                    />
                </StyledApp>
            </ThemeProvider>
        );
    }
}

export default App;