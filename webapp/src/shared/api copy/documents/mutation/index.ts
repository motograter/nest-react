import * as createDocumentMutation from './createDocument.mutation';
import * as removeDocumentMutation from './deleteDocument.mutation';
import * as signDocumentMutation from './signDocument.mutation';
import * as rejectDocumentMutation from './rejectDocument.mutation';
import * as viewDocumentMutation from './viewDocumnet.mutation';
import * as changeVirificationStatusMutation from './chahgeVerificationStatus.mutaion';
import * as updateDocumentMutation from './updateDocument.mutation';
import * as uploadDocumentFileMutation from './uploadDocumentFile.mutation';
import * as createDocumentTypesMutation from './createDocumentTypes.mutation';
import * as updateDocumentTypesMutation from './updateDocumentTypes.mutation';
import * as deleteDocumentTypesMutation from './deleteDocumentTypes.mutation';

export const createMutations = (mutation: any) => {
  return {
    createDocument: mutation({ ...createDocumentMutation }),
    deleteDocument: mutation({ ...removeDocumentMutation }),
    signDocument: mutation({ ...signDocumentMutation }),
    rejectDocument: mutation({ ...rejectDocumentMutation }),
    viewDocument: mutation({ ...viewDocumentMutation }),
    changeVirificationStatu: mutation({ ...changeVirificationStatusMutation }),
    updateDocument: mutation({ ...updateDocumentMutation }),
    uploadDocumentFile: mutation({ ...uploadDocumentFileMutation }),

    // Document Types
    createDocumentTypes: mutation({ ...createDocumentTypesMutation }),
    updateDocumentTypes: mutation({ ...updateDocumentTypesMutation }),
    deleteDocumentTypes: mutation({ ...deleteDocumentTypesMutation }),
  };
};
