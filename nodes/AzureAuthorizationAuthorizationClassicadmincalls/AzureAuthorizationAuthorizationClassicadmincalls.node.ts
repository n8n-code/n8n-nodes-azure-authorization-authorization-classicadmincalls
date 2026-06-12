import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureAuthorizationAuthorizationClassicadmincalls implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Authorization Authorization Classicadmincalls',
                name: 'N8nDevAzureAuthorizationAuthorizationClassicadmincalls',
                icon: { light: 'file:./azure-authorization-authorization-classicadmincalls.png', dark: 'file:./azure-authorization-authorization-classicadmincalls.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'RBAC enables granular policy administration for individual resources or groups.',
                defaults: { name: 'Azure Authorization Authorization Classicadmincalls' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureAuthorizationAuthorizationClassicadmincallsApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
