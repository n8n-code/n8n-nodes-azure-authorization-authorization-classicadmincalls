import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureAuthorizationAuthorizationClassicadmincallsApi implements ICredentialType {
        name = 'N8nDevAzureAuthorizationAuthorizationClassicadmincallsApi';

        displayName = 'Azure Authorization Authorization Classicadmincalls API';

        icon: Icon = { light: 'file:../nodes/AzureAuthorizationAuthorizationClassicadmincalls/azure-authorization-authorization-classicadmincalls.png', dark: 'file:../nodes/AzureAuthorizationAuthorizationClassicadmincalls/azure-authorization-authorization-classicadmincalls.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Authorization Authorization Classicadmincalls API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
