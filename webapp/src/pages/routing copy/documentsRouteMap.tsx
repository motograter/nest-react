import Documents from 'pages/Documents/DocumentList';
import Document from 'pages/Documents/Document';
import DocumentAdd from 'pages/Documents/DocumentAdd';
import { Outlet } from 'react-router-dom';

export const documentsRouteMap = {
  path: Documents.path,
  element: <Outlet />,
  children: [
    { index: true, element: Documents.view() },
    { path: DocumentAdd.path, element: DocumentAdd.view() },
    {
      path: Document.path,
      element: Document.view(),
    },
  ],
};
