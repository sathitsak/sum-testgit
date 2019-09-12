import ajax from "./ajax";

// const BASE_URL = '/api';

export const getProjectList = () => ajax('http://localhost:13000/api/projects');

export const getProjectById = (id) => ajax('http://localhost:13000/api/projects' + id);

export const getSupervisors = () => ajax('http://localhost:13000/api/supervisors');

export const getProposalList = () => ajax('http://localhost:13000/api/proposal');
// export const getProposalList = () => ajax('http://5ce928eda8c1ee0014c7045b.mockapi.io/proposal');


export const getProposalById = (id) => ajax('http://localhost:13000/api/proposal/' + id);

export const getClients = () => ajax('http://localhost:13000/api/client');


