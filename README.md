# MM-Challenge

This project was created using
                              
                              - React
                              
                              - Redux-toolkit
                              
                              - Tailwindcss
                              
                              - flowchart-react

## Project Description

A tool that is used create a clear, easy-to-read visualization of your desired process using flowcharts. one Assumption I made is that changing type of connections should be available only if source of the connection is a decision node. I wanted to create a landing page kind of feeling to it because I didn't want the first thing you see to be the flowchart. I've also tried to integrate a micro interaction on the nodes while they're active(being clicked, dragged) and on first load.

Live link: https://eyobel-mm-challenge.netlify.app/

Features :- 

          - Add four types of nodes (start, end, process, and decision)  both directly dragging nodes from sidebar and double clicking on the canvas.

          - Edit title of each nodes(editing activates on double click of a node).
          
          - Edit type of connections if they're sourced from a node type of "decision"(editing activates on double click of a connection).
          
          - Retains Data on Localstorage for future use.
          
          - Remove a node or a connection when selected and press del or backspace key.
