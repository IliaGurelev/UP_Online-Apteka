PGDMP                     	    |            OnlineAptekaGurelev    14.11    14.11     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
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
       public         heap    postgres    false            �          0    24577    product 
   TABLE DATA           F   COPY public.product (id, image, name, price, description) FROM stdin;
    public          postgres    false    209   �       \           2606    24583    product Product_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.product
    ADD CONSTRAINT "Product_pkey" PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.product DROP CONSTRAINT "Product_pkey";
       public            postgres    false    209            �   �   x�-�=
�0 ��=E&��I�mD���&j�1Qt�gq��@�B��
_n�����˽��s�	C��V.-��Y*����a��U7k�S�E���Q�FQ��,Mt��d��p�D3a�y!'�v�,2�(�\x8�>��5^�/7zA	θ��*��5ጸ��{���v��;*�%?|�C�D�.�����/�FRb     