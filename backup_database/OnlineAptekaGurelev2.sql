PGDMP                     	    |            OnlineAptekaGurelev    14.11    14.11 
    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    24576    OnlineAptekaGurelev    DATABASE     r   CREATE DATABASE "OnlineAptekaGurelev" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Russian_Russia.1251';
 %   DROP DATABASE "OnlineAptekaGurelev";
                postgres    false            �            1259    24577    product    TABLE     �   CREATE TABLE public.product (
    id integer NOT NULL,
    image character varying,
    name character varying,
    price double precision,
    description character varying
);
    DROP TABLE public.product;
       public         heap    postgres    false            �            1259    24584    users    TABLE     t   CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying,
    password character varying
);
    DROP TABLE public.users;
       public         heap    postgres    false            �          0    24577    product 
   TABLE DATA           F   COPY public.product (id, image, name, price, description) FROM stdin;
    public          postgres    false    209   �	       �          0    24584    users 
   TABLE DATA           4   COPY public.users (id, email, password) FROM stdin;
    public          postgres    false    210   �
       `           2606    24583    product Product_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.product
    ADD CONSTRAINT "Product_pkey" PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.product DROP CONSTRAINT "Product_pkey";
       public            postgres    false    209            b           2606    24590    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    210            �   9  x����J�@���S��[����f�"�
^�d�6Дҍbom�x��QK�x�J �ھ���ܢ����|���t�j�[-y)+9�~	��>�+���VqT@;�;i@�D��y�2� �R�My'������<Wګ�e��m:xo&��ƌ��/r,Gj�|���k3�Ol��1SG�L̵u�fL����������e��H〃`y�ŐG	H)bI
�uD&��yĸH�����M^��R4�4��TC5�EO��`����V�Yʕ-��S	�w�ݞٽam7^����>����v;�[�������p      �      x������ � �     