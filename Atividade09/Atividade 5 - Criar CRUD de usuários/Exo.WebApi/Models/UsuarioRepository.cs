using Exo.WebApi.Contexts;
using Exo.WebApi.Models;
using System.Collections.Generic;
using System.Linq;
namespace Exo.WebApi.Repositories
{
    public class UsuarioRepository
    {
        private readonly ExoContext _context;
        public UsuarioRepository(ExoContext context)
        {
        _context = context;
        }
        public Usuario Login(string email, string senha)
        {
            return _context.Usuarios.FirstOrDefault(u => u.Email == email && u.Senha == senha);
        }
        public List<Usuario> Listar()
        {
            return _context.Usuarios.ToList();
        }
        public void Cadastrar(Usuario usuario)
        {
        _context.Usuarios.Add(usuario);
        _context.SaveChanges();
        }
        public Usuario BuscaPorId(int id)
        {
            return _context.Usuarios.Find(id);
        }
        public void Atualizar(int id, Usuario usuario)
        {
            Usuario usuarioExistente = _context.Usuarios.Find(id);
            if (usuarioExistente != null)
            {
                usuarioExistente.Nome = usuario.Nome;
                usuarioExistente.Email = usuario.Email;
                usuarioExistente.Senha = usuario.Senha;
                _context.SaveChanges();
            }
        }   
        public void Deletar(int id)
        {
            Usuario usuario = _context.Usuarios.Find(id);
            if (usuario != null)
            {
                _context.Usuarios.Remove(usuario);
                _context.SaveChanges();
            }
        }