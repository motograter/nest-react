import { baseApi } from '../baseApi';
import { createQueries } from './query';
import { createMutations } from './mutation';

const documentsApi = baseApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      ...createQueries(builder.query),
      ...createMutations(builder.mutation),
    };
  },
  overrideExisting: false,
});

export const {
  useGetDocumentsQuery,
  useGetDocumentQuery,
  useGetDocumentTypesQuery,
  useGetAllDocumentArchiveQuery,
  useGetMyDocumentsQuery,
  useGetAllVersionsDocumentQuery,
  useGetDocumentsStatsQuery,
  // Mutations
  useCreateDocumentMutation,
  useChangeVirificationStatuMutation,
  useViewDocumentMutation,
  useSignDocumentMutation,
  useRejectDocumentMutation,
  useDeleteDocumentMutation,
  useUploadDocumentFileMutation,
  useUpdateDocumentMutation,
  useCreateDocumentTypesMutation,
  useUpdateDocumentTypesMutation,
  useDeleteDocumentTypesMutation,
} = documentsApi;
