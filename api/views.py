from django.shortcuts import render
from rest_framework.response import Response
from .models import Note
from rest_framework import permissions
from rest_framework.views import APIView
from .serializers import NoteSerializer
from . import utils
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveAPIView, DestroyAPIView, UpdateAPIView
# Create your views here.


class NoteListView(generics.ListCreateAPIView):
    queryset = Note.objects.all().order_by('-updated')
    serializer_class = NoteSerializer
    permission_classes = (permissions.AllowAny, )


class NoteDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    permission_classes = (permissions.AllowAny, )


# @api_view(['GET'])
# def getRoutes(requwst):
#     routes = [
#         {
#             'Endpoint': '/notes/',
#             'method': 'GET',
#             'body': None,
#             'description': 'Returns an array of notes'
#         },
#         {
#             'Endpoint': '/notes/id',
#             'method': 'GET',
#             'body': None,
#             'description': 'Returns a single note object'
#         },
#         {
#             'Endpoint': '/notes/create/',
#             'method': 'POST',
#             'body': {'body': ""},
#             'description': 'Creates new note with data sent in post request'
#         },
#         {
#             'Endpoint': '/notes/id/update/',
#             'method': 'PUT',
#             'body': {'body': ""},
#             'description': 'Creates an existing note with data sent in post request'
#         },
#         {
#             'Endpoint': '/notes/id/delete/',
#             'method': 'DELETE',
#             'body': None,
#             'description': 'Deletes and exiting note'
#         },
#     ]
#     return Response(routes)


# @api_view(['GET', 'POST'])
# def getNotes(request):
#     if request.method == 'GET':
#         return utils.getAllNote(request)

#     if request.method == 'POST':
#         return utils.createNote(request)


# @api_view(['GET', 'PUT', 'DELETE'])
# def getNote(request, pk):
#     if request.method == 'GET':
#         return utils.detailNote(request, pk)

#     if request.method == 'PUT':
#         return utils.updateNote(request, pk)

#     if request.method == 'DELETE':
#         return utils.deleteNote(pk)
