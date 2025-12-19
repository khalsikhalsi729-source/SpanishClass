const CLIENT_CONFIG = {
    endpoint: 'https://cloud.appwrite.io/v1', 
    projectId: '694312f00019cf598ee4',
    databaseId: '694313050004e60fb48f',
    collectionId: 'students'
};

const { Client, Databases, Query } = Appwrite;
const client = new Client()
    .setEndpoint(CLIENT_CONFIG.endpoint)
    .setProject(CLIENT_CONFIG.projectId);

const databases = new Databases(client);