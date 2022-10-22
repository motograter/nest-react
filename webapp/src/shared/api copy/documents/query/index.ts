import * as getDocumentsQuery from './getDocuments.query';
import * as getDocumentQuery from './getDocument.query';
import * as getDocumentTypesQuery from './getDocumentTypes.query';
import * as getAllDocumentArchiveQuery from './getAllDocumentArchive.query';
import * as getMyDocumentsQuery from './getMyDocuments.query';
import * as getAllVersionsDocumentQuery from './getAllVersionsDocument.query';
import * as getDocumentsStatsQuery from './getDocumentsStats.query';

export const createQueries = (query: any) => {
  return {
    getDocuments: query({ ...getDocumentsQuery }),
    getDocument: query({ ...getDocumentQuery }),
    getDocumentTypes: query({ ...getDocumentTypesQuery }),
    getAllDocumentArchive: query({ ...getAllDocumentArchiveQuery }),
    getAllVersionsDocument: query({ ...getAllVersionsDocumentQuery }),
    getMyDocuments: query({ ...getMyDocumentsQuery }),
    getDocumentsStats: query({ ...getDocumentsStatsQuery }),
  };
};
