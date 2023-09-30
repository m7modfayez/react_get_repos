import React from 'react'


function Repos ({repos, inputValue})
{

    return (
        <div className='p-5'>
          {repos.length > 0 && (
            <table className="table table-hover border-start border-end table-bordered bg-light w-80 b-2 p-2">
              
                <tr className="bg-gradient font-weight-bold fs-4 text-danger w-80">
                  <th className="p-2 w-40 ">Repo Name</th>
                  <th className="p-2 w-10">Repo Language</th>
                  <th className="p-2 w-10">Repo Size</th>
                  <th className="p-2 w-10">Stars</th>
                  <th className="p-2 w-10">Watchers</th>
                  <th className="p-2 w-10">Repo Link</th>
                </tr>
                {repos.map((repo) => (
                  <tr className="fs-5 text-start">
                    <td className="p-3">{repo.name}</td>
                    <td className="p-3">{repo.language}</td>
                    <td className="p-3">{repo.size}</td>
                    <td className="p-3 ">{repo.stargazers_count}</td>
                    <td className="p-3">{repo.watchers_count}</td>
                    <td className="p-3">
                      <a
                        className="text-decoration-none w-10 rounded-1 text-light"
                        style={{ backgroundColor: 'rgb(32, 166, 207)' }}
                        href={`https://www.github.com/${inputValue}/${repo.name}`}
                        target="_blank"
                        // rel="noopener noreferrer"
                      >
                        Visit Repo
                      </a>
                    </td>
                  </tr>
                ))}
              
            </table>            
          )}
            </div>
    )
}

export default Repos
